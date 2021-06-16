/// <reference types="react-scripts" />

interface video {
  cover: string,
  slug: string,
  title: string,
  artist: string,
  key: string,
  url: string,
  details: string,
  color: string,
}
interface photo {
  key: string,
  details?: string,
  title?: string,
  photo: string
}
interface album {
  slug: string,
  title: string,
  key: string,
  photo: string,
  photos: Array<photo>,
  color: string,
}
interface category {
  cover: string,
  slug: string,
  title: string,
  key: string,
  albums: Array<album>,
  artist?: string,
  color: string,
}
interface location {
  hash: string,
  pathname: string,
  search: string,
  state: object
}
interface client {
  key: string,
  title: string, 
  url: string,
}
interface information {
  information: string,
  cover: string,
  clients: Array<client>
}

//declare var DelayLinks: any