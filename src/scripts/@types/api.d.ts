interface IGetSurveysRequest {
  category?: string
  keyword?: string
}

interface IGetSurveysResponse {
  data: IGetSurveyResponse[]
  totalCount: number
  currPage: number
  nextPage: boolean
}

interface IGetSurveyRequest {
  id: string
}

type IGetSurveyResponse = ISurveyData

interface IGetCommentsRequest {
  id: string
  keyword?: string
  order: 'thumbUp' | 'thumbDown' | 'latest'
  page?: number
}

interface IGetCommentsResponse {
  totalCount: number
  currPage: number
  nextPage: boolean
  data: ICommentData[]
}

interface IGetCommentRequest {
  request: id
}

interface IGetCommentResponse {
  id: string
  thumbnail: string
  userName: string
  created: Date
  contents: string
  thumbUpCount: number
  nestedCommentId: number
}

interface IGetNestedCommentsRequest {
  id: string
  commentId: string
}

interface IGetNestedCommentsResponse {
  id: string
  userName: string
  created: Date
  contents: string
  thumbUpCount: number
}

interface IPostVoteRequest {
  id: string
  voteId: string
}

interface IPostUserResponse {
  id: string
}
