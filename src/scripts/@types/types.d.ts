interface ISelectOption {
  readonly value: string | number
  readonly label: string
}

interface IVoteData {
  label: string
  voted?: number
}

interface ISurveyData {
  id: number
  thumbnail: string
  userName: string
  registDate: Date
  contents: string
  voteCount?: number
  votes: IVoteData[]
  thumbUpCount: number
  commentCount: number
}

interface ICommentData {
  id: number
  thumbnail: string
  userName: string
  registDate: Date
  contents: string
  thumbUpCount: number
  commentCount: number
  nestedCommentId: number
}

interface INestedCommentData {
  id: number
  userName: string
  registDate: Date
  contents: string
  thumbUpCount: number
}
