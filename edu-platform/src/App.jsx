import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LearningPaths from './components/LearningPaths'
import PersonalizedLearning from './components/PersonalizedLearning'
import Companies from './components/Companies'
import Professors from './components/Professors'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <LearningPaths />
        <PersonalizedLearning />
        <Companies />
        <Professors />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
