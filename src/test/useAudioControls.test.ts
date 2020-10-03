import { useAudioControls } from '../index'
import { ref } from 'vue'
const el = document.createElement('audio')
const audioEl = ref(el)
const audioUrl = ref(
  'https://res.cloudinary.com/wlopez/video/upload/v1582387085/vapemusic2/2020/1/Farruko_-_Si_Me_Dices_Que_Si.mp3'
)

const { controls, state, audioTime, audioTimeLeft } = useAudioControls({
  audioEl,
  src: audioUrl,
  autoplay: false,
  loop: false,
})

console.log(controls)
console.log(state)
console.log(audioTime)
console.log(audioTimeLeft)
