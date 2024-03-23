'use client';

import { cn, secondsToFormattedHMS } from '@/lib/utils';
import {
  Play,
  type LucideIcon,
  PictureInPicture2,
  type LucideProps,
  Pause,
  Maximize,
  Minimize
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, {
  HTMLAttributes,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import ReactPlayer from 'react-player';
import { type OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';

const ReactLazyPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type VideoPlayerProps = {
  url: string;
  previewImage: string;
  title: string;
  duration: number;
};

type ButtonProps = {
  icon?: LucideIcon;
  iconProps?: LucideProps;
} & HTMLAttributes<HTMLButtonElement>;

type PlayerState = {
  player: null | ReactPlayer;
  playing: boolean;
  pip: boolean;
  light: boolean;
  previewImage: string;
  playedSeconds: number;
  played: number;
  loadedSeconds: number;
  loaded: number;
  duration: number;
  isFullscreen: boolean;
};

type EmptyFunc = () => void;

type PlayerContextProps = PlayerState & {
  containerRef: React.RefObject<HTMLDivElement>;
  title: string;
  isPlayerLoaded: boolean;
  onPlay: EmptyFunc;
  onPause: EmptyFunc;
  togglePlay: EmptyFunc;
  onEnablePIP: EmptyFunc;
  onDisablePIP: EmptyFunc;
  togglePip: EmptyFunc;
  forward: EmptyFunc;
  backward: EmptyFunc;
  toggleFullscreen: EmptyFunc;
  onReady: (player: ReactPlayer) => void;
  seekTo: (seekAmount: number) => void;
  onProgress: (progress: OnProgressProps) => void;
  onDuration: (duration: number) => void;
};

const DEFAULT_SEEK_AMOUNT = 30;

const PlayerContext = createContext<null | PlayerContextProps>(null);

const usePlayer = () => {
  const ctx = useContext(PlayerContext);

  if (!ctx) throw new Error('usePlayer must be used inside PlayerContext component!');

  return ctx;
};

const Button = ({ icon: Icon, iconProps, className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2 rounded-md p-0 opacity-80 transition-opacity duration-150 hover:opacity-100',
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon
          className="size-[2em] flex-shrink-0"
          strokeWidth={0}
          fill="currentColor"
          {...iconProps}
        />
      )}
      {children}
    </button>
  );
};

const TopControls = () => {
  const { playing, title } = usePlayer();

  return (
    <div
      className={cn(
        'absolute left-0 right-0 top-0 z-20 flex items-center gap-2 px-3 py-2 text-white md:px-4 md:py-3',
        'opacity-0 group-focus-within:opacity-100 group-hover:opacity-100',
        '-translate-y-full group-focus-within:translate-y-0 group-hover:translate-y-0',
        'transition-[transform,_opacity] duration-150',
        'flex items-center gap-4',
        {
          'translate-y-0 opacity-100': !playing
        }
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <p className="truncate text-base md:text-xl">{title}</p>
    </div>
  );
};

const CenterControls = () => {
  const { playing, togglePlay } = usePlayer();

  return (
    <div
      className={cn(
        'xs:gap-6 absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-white md:gap-16',
        'opacity-0 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100',
        {
          'opacity-100': !playing
        }
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <Button
        className="flex-shrink-0"
        onClick={togglePlay}
        icon={playing ? Pause : Play}
        iconProps={{
          className: 'size-[3em]'
        }}
      />
    </div>
  );
};

const BottomControls = () => {
  const { playing, playedSeconds, duration, isFullscreen, togglePip, toggleFullscreen } =
    usePlayer();

  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 right-0 z-20 flex items-center gap-2 px-3 py-2 text-white md:px-4 md:py-3',
        'opacity-0 group-focus-within:opacity-100 group-hover:opacity-100',
        'translate-y-full group-focus-within:translate-y-0 group-hover:translate-y-0',
        'transition-[transform,_opacity] duration-150',
        {
          'translate-y-0 opacity-100': !playing
        }
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Left */}
      <div className="flex flex-1 items-center gap-3">
        {/* Video Played / Duration Info */}
        <div className="flex items-center gap-1 text-xs md:text-sm">
          <span>{secondsToFormattedHMS(playedSeconds)}</span>
          <span>/</span>
          <span className="text-white/60">{secondsToFormattedHMS(duration)}</span>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-3">
        {/* PIP */}
        <Button
          icon={PictureInPicture2}
          iconProps={{
            fill: 'transparent',
            strokeWidth: 2
          }}
          onClick={togglePip}
        />
        <Button
          icon={isFullscreen ? Minimize : Maximize}
          iconProps={{
            fill: 'transparent',
            strokeWidth: 2
          }}
          onClick={toggleFullscreen}
        />
      </div>
    </div>
  );
};

const Controls = () => {
  const { playing } = usePlayer();

  return (
    <>
      <TopControls />
      <CenterControls />
      <BottomControls />
      <div
        className={cn(
          'pointer-events-none absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100',
          { 'opacity-100': !playing }
        )}
      />
    </>
  );
};

const PlayerWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isPlayerLoaded, containerRef } = usePlayer();
  return (
    <div
      ref={containerRef}
      className="group relative mx-auto flex aspect-video max-h-[85vh] w-full justify-center overflow-hidden bg-black text-sm [&_video]:z-0"
    >
      {children}
      {isPlayerLoaded && <Controls />}
    </div>
  );
};

const PreviewImage = ({ url, alt }: { url: string; alt: string }) => {
  return <Image src={url} fill alt={alt} className="object-cover object-center" sizes="100vw" />;
};

const Player = ({ url, previewImage, title }: VideoPlayerProps) => {
  const {
    playing,
    pip,
    light,
    onPlay,
    onPause,
    onReady,
    onEnablePIP,
    onDisablePIP,
    onProgress,
    onDuration
  } = usePlayer();

  return (
    <ReactLazyPlayer
      width="100%"
      height="auto"
      playsinline
      playIcon={<Play className="z-20 size-[3.2em]" fill="white" strokeWidth={0} />}
      light={light ? <PreviewImage alt={title} url={previewImage} /> : false}
      controls={false}
      url={url}
      pip={pip}
      playing={playing}
      wrapper={PlayerWrapper}
      onPlay={onPlay}
      onPause={onPause}
      onReady={onReady}
      onEnablePIP={onEnablePIP}
      onDisablePIP={onDisablePIP}
      onProgress={onProgress}
      onDuration={onDuration}
      onClickPreview={(e) => e?.stopPropagation()}
    />
  );
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<PlayerState>({
    // playing: true,
    playing: false,
    player: null,
    pip: false,
    // light: true,
    light: false,
    previewImage: props.previewImage,
    loaded: 0,
    loadedSeconds: 0,
    played: 0,
    playedSeconds: 0,
    duration: props.duration,
    isFullscreen: false
  });

  const { player } = state;

  const isPlayerLoaded = Boolean(state.player);
  const title = props.title;

  const updateState = useCallback(<T extends keyof PlayerState>(key: T, value: PlayerState[T]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onPlay = useCallback(() => updateState('playing', true), [updateState]);
  const onPause = useCallback(() => updateState('playing', false), [updateState]);
  const togglePlay = useCallback(
    () => setState((prev) => ({ ...prev, playing: !prev.playing })),
    []
  );

  const onEnablePIP = useCallback(() => updateState('pip', true), [updateState]);
  const onDisablePIP = useCallback(() => updateState('pip', false), [updateState]);
  const togglePip = useCallback(() => setState((prev) => ({ ...prev, pip: !prev.pip })), []);

  const onReady = useCallback(
    (player: ReactPlayer) => updateState('player', player),
    [updateState]
  );

  const toggleLight = useCallback(() => setState((prev) => ({ ...prev, light: !prev.light })), []);

  const seekTo = useCallback((seekAmount: number) => player?.seekTo(seekAmount), [player]);

  const forward = useCallback(() => {
    if (player) player.seekTo(player.getCurrentTime() + DEFAULT_SEEK_AMOUNT);
  }, [player]);

  const backward = useCallback(() => {
    if (player) player.seekTo(player.getCurrentTime() - DEFAULT_SEEK_AMOUNT);
  }, [player]);

  const onProgress = useCallback(
    (progress: OnProgressProps) => setState((prev) => ({ ...prev, ...progress })),
    []
  );

  const onDuration = useCallback((value: number) => updateState('duration', value), [updateState]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (screenfull.isEnabled) {
      screenfull.toggle(containerRef.current, {
        navigationUI: 'hide'
      });
    }
  }, []);

  // Fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      updateState('isFullscreen', screenfull.isFullscreen);
    };

    screenfull.on('change', handleFullscreenChange);
    return () => screenfull.off('change', handleFullscreenChange);
  }, [updateState]);

  // Key Bindings
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key.toLocaleLowerCase()) {
        case ' ':
        case 'k':
          if (isPlayerLoaded) {
            togglePlay();
          } else {
            toggleLight();
          }
          break;
        case 'i':
          togglePip();
          break;
        case 'arrowright':
        case 'l':
          forward();
          break;
        case 'arrowleft':
        case 'j':
          backward();
          break;
        case 'f':
          toggleFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, togglePip, isPlayerLoaded, toggleLight, forward, backward, toggleFullscreen]);

  const value = useMemo(
    () => ({
      ...state,
      isPlayerLoaded,
      title,
      containerRef,
      onPause,
      onPlay,
      togglePlay,
      onReady,
      onEnablePIP,
      onDisablePIP,
      togglePip,
      seekTo,
      forward,
      backward,
      onProgress,
      onDuration,
      toggleFullscreen
    }),
    [
      state,
      isPlayerLoaded,
      title,
      onPlay,
      onPause,
      togglePlay,
      onReady,
      onEnablePIP,
      onDisablePIP,
      togglePip,
      seekTo,
      forward,
      backward,
      onProgress,
      onDuration,
      toggleFullscreen
    ]
  );

  return (
    <PlayerContext.Provider value={value}>
      <Player {...props} />
    </PlayerContext.Provider>
  );
};

export default VideoPlayer;
