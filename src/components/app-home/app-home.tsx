import { Component, h, Host } from '@stencil/core';
import { MediaPlayer } from 'vidstack';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  private mediaPlayer!: MediaPlayer;

  render() {
    return (
      <Host>
        {/* This script needs to be uncommented for this player component to work */}
        {/* <script
          src="https://cdn.vidstack.io/player.core"
          type="module"
        ></script> */}

        <ion-header>
          <ion-toolbar>
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <media-player ref={ref => (this.mediaPlayer = ref)} title="Sprite Fight" src="https://files.vidstack.io/sprite-fight/720p.mp4">
            <media-provider></media-provider>
          </media-player>
          <ion-button
            onClick={() => {
              this.mediaPlayer.paused ? this.mediaPlayer.play() : this.mediaPlayer.pause();
            }}
          >
            Play
          </ion-button>
        </ion-content>
      </Host>
    );
  }
}
