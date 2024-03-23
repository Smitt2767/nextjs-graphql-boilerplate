'use client';

import { cn } from '@/lib/utils';
import { Play, type LucideIcon, PictureInPicture2, type LucideProps, Pause } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, {
  HTMLAttributes,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react';
import ReactPlayer from 'react-player';
const ReactLazyPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type VideoPlayerProps = {
  url: string;
  previewImage: string;
  title: string;
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
};

type PlayerAction =
  | { type: 'SET_PLAYER'; payload: ReactPlayer }
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_PIP'; payload: boolean }
  | { type: 'TOGGLE_PIP' }
  | { type: 'TOGGLE_LIGHT' };

type EmptyFunc = () => void;

type PlayerContextProps = PlayerState & {
  isPlayerLoaded: boolean;
  onPlay: EmptyFunc;
  onPause: EmptyFunc;
  togglePlay: EmptyFunc;
  onEnablePIP: EmptyFunc;
  onDisablePIP: EmptyFunc;
  togglePip: EmptyFunc;
  forward: EmptyFunc;
  backward: EmptyFunc;
  onReady: (player: ReactPlayer) => void;
  seekTo: (seekAmount: number) => void;
};

const DEFAULT_SEEK_AMOUNT = 30;

const reducer = (state: PlayerState, action: PlayerAction): PlayerState => {
  const { type } = action;
  switch (type) {
    case 'SET_PLAYER':
      return { ...state, player: action.payload };
    case 'SET_PLAYING':
      return { ...state, playing: action.payload };
    case 'TOGGLE_PLAY':
      return { ...state, playing: !state.playing };
    case 'SET_PIP':
      return { ...state, pip: action.payload };
    case 'TOGGLE_PIP':
      return { ...state, pip: !state.pip };
    case 'TOGGLE_LIGHT':
      return { ...state, light: !state.light };
    default:
      return state;
  }
};

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
        'flex items-center justify-center rounded-md p-0 opacity-80 transition-opacity duration-150 hover:opacity-100',
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon
          className="max-xs:size-[1.4em] size-[2em]"
          strokeWidth={0}
          fill="currentColor"
          {...iconProps}
        />
      )}{' '}
      {children}
    </button>
  );
};

const Controls = () => {
  const { playing, togglePip, togglePlay } = usePlayer();

  return (
    <>
      <div
        className={cn(
          'xs:gap-6 absolute left-0 right-0 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center gap-2 text-white md:gap-16',
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
            className: 'max-xs:size-[2.4em] z-20 size-[3.6em] max-md:size-[3em]'
          }}
        />
      </div>
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 z-20 flex items-center gap-2 p-2 text-white',
          'opacity-0 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100',
          {
            'opacity-100': !playing
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-1 items-center gap-2">{/*  */}</div>
        <div className="flex items-center gap-2">
          {/* PIP */}
          <Button
            icon={PictureInPicture2}
            iconProps={{
              fill: 'transparent',
              strokeWidth: 2
            }}
            onClick={togglePip}
          />
        </div>
      </div>
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
  const { togglePlay, isPlayerLoaded } = usePlayer();
  return (
    <div
      className="group relative mx-auto flex aspect-video max-h-[85vh] w-full justify-center bg-black text-lg"
      onClick={togglePlay}
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
  const { onPlay, onPause, onReady, onEnablePIP, onDisablePIP, playing, pip, light } = usePlayer();

  return (
    <ReactLazyPlayer
      width="100%"
      height="auto"
      playsinline
      playIcon={
        <Play
          className="max-xs:size-[2.4em] z-20 size-[3.6em] max-md:size-[3em]"
          fill="white"
          strokeWidth={0}
        />
      }
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
      onClickPreview={(e) => e?.stopPropagation()}
    />
  );
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const [state, dispatch] = useReducer(reducer, {
    playing: true,
    player: null,
    pip: false,
    light: true,
    previewImage: props.previewImage
  });

  const { player } = state;
  const isPlayerLoaded = Boolean(state.player);

  const togglePlay = useCallback(() => dispatch({ type: 'TOGGLE_PLAY' }), []);
  const onPlay = useCallback(() => dispatch({ type: 'SET_PLAYING', payload: true }), []);
  const onPause = useCallback(() => dispatch({ type: 'SET_PLAYING', payload: false }), []);

  const onEnablePIP = useCallback(() => dispatch({ type: 'SET_PIP', payload: true }), []);
  const onDisablePIP = useCallback(() => dispatch({ type: 'SET_PIP', payload: false }), []);
  const togglePip = useCallback(() => dispatch({ type: 'TOGGLE_PIP' }), []);

  const onReady = useCallback(
    (player: ReactPlayer) => dispatch({ type: 'SET_PLAYER', payload: player }),
    []
  );

  const toggleLight = useCallback(() => dispatch({ type: 'TOGGLE_LIGHT' }), []);

  const seekTo = useCallback((seekAmount: number) => player?.seekTo(seekAmount), [player]);

  const forward = useCallback(() => {
    if (player) player.seekTo(player.getCurrentTime() + DEFAULT_SEEK_AMOUNT);
  }, [player]);

  const backward = useCallback(() => {
    if (player) player.seekTo(player.getCurrentTime() - DEFAULT_SEEK_AMOUNT);
  }, [player]);

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
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, togglePip, isPlayerLoaded, toggleLight, player, forward, backward]);

  const value = useMemo(
    () => ({
      ...state,
      isPlayerLoaded,
      onPause,
      onPlay,
      togglePlay,
      onReady,
      onEnablePIP,
      onDisablePIP,
      togglePip,
      seekTo,
      forward,
      backward
    }),
    [
      state,
      isPlayerLoaded,
      onPlay,
      onPause,
      togglePlay,
      onReady,
      onEnablePIP,
      onDisablePIP,
      togglePip,
      seekTo,
      forward,
      backward
    ]
  );

  return (
    <PlayerContext.Provider value={value}>
      <Player {...props} />
    </PlayerContext.Provider>
  );
};

export default VideoPlayer;
