import { useParams } from 'react-router-dom'
import Categories from '../Categories'
import Header from '../Header'
import NewsList from '../NewsList'

const NewsPage = () => {
  const params = useParams()
  const category = params.category || 'all'

  return (
    <>
      <Header />
      <Categories />
      <NewsList category={category} />
    </>
  )
}

export default NewsPage
