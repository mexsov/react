import { CarComponent } from '../2paskaita/CardCompoment'
import './App.css'
import Body from './components/Body'
import Button from './components/Button'
import Header from './components/Header'
import NavBar from './components/NavBar'


const cards = [
  {
    id:1,
    header: 'header 1 ',
  subtitle: 'subtitle 1'},
  {id:2,
    header: 'header 2 ',
  subtitle: 'subtitle 2'},

{id:3,
   header: 'header 3 ',
  subtitle: 'subtitle 3'},

{ id:4,
  header: 'header 4 ',
  subtitle: 'subtitle 4'}
]
function App() {
 

  return (
    <>
      {/* <NavBar />
      <Header/> */}
      {/* <Body/>
      <Button/> */}
      {/* <CarComponent link="https://www.google.com/search?q=google+vaizdai+gelytes&tbm=isch&ved=2ahUKEwjWu9aCtPaDAxVy9rsIHfmPBs4Q2-cCegQIABAA&oq=google+vaizdai+gelytes&gs_lcp=CgNpbWcQAzoKCAAQgAQQigUQQzoFCAAQgAQ6BggAEAUQHjoGCAAQCBAeOgQIABAeOgcIABCABBAYUIUKWPIsYJEuaAFwAHgAgAGmAYgBwgySAQQxMi42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=nTWxZZb5CvLs7_UP-Z-a8Aw&bih=641&biw=1366#imgrc=f6motZRrbPcugM" header="this is the header" subtitle="this is subtitle" picture="https://cdn-products.eneba.com/resized-products/X5v9Q2XH2ZGmOx5v4dUE__zXVFZO--MulxWQCIF0xOY_1920x1080_1x-0.jpeg" />
     */}
     {cards.map(card => <CarComponent key={card.id} header={card.header} subtitle={card.subtitle} />)}
    </>
  )
}

export default App
