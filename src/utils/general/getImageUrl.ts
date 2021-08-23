type Props = {
  isPoster: boolean
  imgId: string
}

export const getImageUrl = ({ isPoster, imgId }: Props) => {
  return isPoster
    ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${imgId}`
    : `https://www.themoviedb.org/t/p/original/${imgId}`
}
