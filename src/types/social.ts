type SocialId = 'Linkedin' | 'GitHub' | 'X'
type SocialName = 'Linkedin' | 'GitHub' | 'X'

export interface Social {
  id: SocialId
  name: SocialName
  url: string
  label: string
  image: {
    logo: any
    width: number
    height: number
  }
}
