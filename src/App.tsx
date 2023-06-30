import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './GlobalStyles'
/* import ListaDeContatos from './containers/ListaDeContatos' */
import store from './store'
import Home from './pages/Home'
import Adicionar from './pages/Adicionar'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <Adicionar />
  }
])

const App = () => {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
