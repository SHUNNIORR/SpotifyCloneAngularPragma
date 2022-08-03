
interface endpoints{
    userInfo:string,
    newReleases:string,
    featuredPlaylist:string,
    usersTopTracks:string,
    usersFavoriteTracks:string,
    searchTrackArtists:string
}

export const endpoints:endpoints={
  userInfo:'https://api.spotify.com/v1/me',
  newReleases:'https://api.spotify.com/v1/browse/new-releases?country=CO&limit=10&offset=5',
  featuredPlaylist:'https://api.spotify.com/v1/browse/featured-playlists?country=CO&locale=sv_CO&timestamp=2022-7-26T09%3A00%3A00.000Z&limit=10&offset=5',
  usersTopTracks:'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=5',
  usersFavoriteTracks:'https://api.spotify.com/v1/me/tracks?limit=10',
  searchTrackArtists:'https://api.spotify.com/v1/search?q='
}
