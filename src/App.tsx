import React from 'react';
import { AppRouter } from './common/components';
import { HeaderFeature, FooterFeature, PageFeature} from "./pages";

function App() {
  return <div>
    <HeaderFeature />
    
    <PageFeature > 
      <AppRouter />
    </PageFeature>

    <FooterFeature />
  </div>;
}

export default App;
