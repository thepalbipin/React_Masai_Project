import { useEffect } from 'react';

export default function DocumentTitle() {
  useEffect(() => {
    document.title = 'Mein Hoon Khalnayak';

    return () => {
      document.title = 'Document Title';
    };
  }, []); 

  return (
    <div>
      <p>Document Title</p>
    </div>
  );
}
