import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav-bar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import PaymentForm from "./pages/sub-pages/payment-page/Payment-form/PaymentForm";
import FacultyAndDept from "./pages/sub-pages/Faculty and department/facultyAndDept";
import SearchReceipt from "./pages/Search For payment Receipt/searchReceipt";
import Support from "./pages/support/Support";
import SemesterFeeTable from "./pages/sub-pages/dates/SemesterFeeTable";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/RUET-ePayment" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/RUET-ePayment/payNow" element={<PaymentForm />} />
        <Route path="/RUET-ePayment/Faculty-and-depts" element={<FacultyAndDept />} />
        <Route path="/RUET-ePayment/search-receipt" element={<SearchReceipt />}></Route>
        <Route path="/RUET-ePayment/support" element={<Support />}></Route>
        <Route path="/RUET-ePayment/SemesterFeeTable" element={<SemesterFeeTable/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
