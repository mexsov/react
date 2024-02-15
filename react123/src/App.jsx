
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'


// import { CarComponent } from '../2paskaita/CardCompoment'
import './App.css'
// import ShowText from './components/useState/ShowText'
// import { MyTeam } from './components/useState/myTeam'
// import { StepCounter } from './components/useState/stepCounter'
// import Body from './components/Body'
// import Button from './components/Button'
// import Header from './components/Header'
// import NavBar from './components/NavBar'
// import { Posts } from './components/post'

// import { Comments } from './comments'
// import { PostsDataFetching } from './components/data-fetching/PostFataFetching'
// const Receptai = React.lazy(() => import('./recepta/ReceptaiVisi'));
import { PostsDataFetching } from './components/data-fetching/PostFataFetching'
import { AllForms } from './components/forms/AllForms'


// const cards = [
//   {
//     id: 1,
//     header: 'header 1 ',
//     subtitle: 'subtitle 1'
//   },
//   {
//     id: 2,
//     header: 'header 2 ',
//     subtitle: 'subtitle 2'
//   },

//   {
//     id: 3,
//     header: 'header 3 ',
//     subtitle: 'subtitle 3'
//   },

//   {
//     id: 4,
//     header: 'header 4 ',
//     subtitle: 'subtitle 4'
//   }
// ]
function App() {


  return (
    <>
      <Routes>

        <Route path="/data" element={<PostsDataFetching />} />
        <Route path="/" element={<AllForms /> } />
        {/* <MyTeam />
      <StepCounter />
      < Route path='/receptai' element={
        <React.Suspense fallback={<div>
          Component Loading
        </div> }>
          <Receptai />
        </React.Suspense>} */}
        {/* <ShowText/> */}
        {/* <NavBar/> */}

        {/* <NavBar /> */}
        {/* <Header />
        <Body />
        <Button />
        <CarComponent link="" header="this is the header" subtitle="this is subtitle" picture="https://cdn-products.eneba.com/resized-products/X5v9Q2XH2ZGmOx5v4dUE__zXVFZO--MulxWQCIF0xOY_1920x1080_1x-0.jpeg" />

        {cards.map(card => <CarComponent key={card.id} header={card.header} subtitle={card.subtitle} />)}
        < Route path='/studentas/:id' element={<VienasStudentas />} />
        < Route path="/posts" element={<Posts />}>
          <Route path="/postId" element={<OnePost />}>
            <Route element={<Comments />}> />
            </Route>
          </Route> */}

      </Routes>
    </>
  )
}

export default App
