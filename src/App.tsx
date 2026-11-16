import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { StoryPage } from './pages/StoryPage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { DiningPage } from './pages/DiningPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { AttractionsPage } from './pages/AttractionsPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { TravelGuidePage } from './pages/TravelGuidePage';
import { GuestInfoPage } from './pages/GuestInfoPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:slug" element={<RoomDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/attractions" element={<AttractionsPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/travel-guide" element={<TravelGuidePage />} />
          <Route path="/guest-info" element={<GuestInfoPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
