export interface Post {
  id: string
  imageUrl: string
  caption: string
  likeCount: number
  createdAt: string
  user: {
    id: string
    username: string
  }
  comments: {
    id: string
    user: {
      id: string
      username: string
    }
    text: string,
    createdAt: string
  }[]
}
