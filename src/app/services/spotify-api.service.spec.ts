import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { SpotifyApiService } from './spotify-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Spotify API Service', () => {
  let spotifyService: SpotifyApiService;
  let httpClient: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[]
    });
    spotifyService = TestBed.inject(SpotifyApiService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpClient.verify();
});

  it('Should be created', () => {
    expect(spotifyService).toBeTruthy();
  });

  test('Should bring my Spotify name', () => {
    let username:any;
    spotifyService.getUserInfo()
        .subscribe((userinfo) => {
            console.log('entroo',userinfo);
            username=userinfo.display_name;
        });
    const req = httpClient.expectOne('https://api.spotify.com/v1/me');
    expect(req.request.method).toBe('GET');
    req.flush({display_name: 'Shunnior'});
    expect(username).toBe('Shunnior')
  });
});
