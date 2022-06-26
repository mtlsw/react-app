interface ISelectOption {
  readonly value: string | number
  readonly label: string
}

interface IUser {
  name: string
  picture?: string
}

interface IVoteData {
  id: string
  label: string
  thumbnail: string
  voted: number
}

interface ISurveyData {
  id: string
  thumbnail?: string
  user: IUser
  created: Date
  contents: string
  votes: IVoteData[]
  likeCount: number
  commentCount: number
  currentUserReaction?: boolean // true - thumbUp, false - thumbDown
}

interface ICommentData {
  id: string
  user: IUser
  created: Date
  contents: string
  likeCount: number
  nestedCommentCount: number
}

interface INestedCommentData {
  id: string
  user: IUser
  created: Date
  contents: string
  likeCount: number
}

/**
 * Google oAuth
 */
interface IGoogleOAuth {
  access_token: string
  expires_in: number
  scope: string
  state: string
  token_type: string
}

interface IGoogleOauthState {
  type: string
  surveyId: string
  commentId: string
}

interface IGoogleUserInfoProfile {
  id: string
  name: string
  given_name: string
  family_name: string
  picture: string
  locale: string
}
