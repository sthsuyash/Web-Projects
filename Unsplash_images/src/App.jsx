import { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div className="px-10 py-20">
      <SearchBar onSearch={handleSearch} />
      <ImageGrid searchTerm={searchTerm} />
    </div>
  );
};

export default App;
