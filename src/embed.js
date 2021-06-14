import { FirestoreProvider } from "@react-firebase/firestore";
// Before
const App = () => {
  return <div>This is my app</div>;
};

// After
const App = () => {
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <div>This is my app</div>
    </FirestoreProvider>
  );
};