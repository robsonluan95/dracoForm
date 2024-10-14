import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const metadata = {
  title: "Draco Suplementos",
  description: "Formulário da Draco Suplementos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={` antialiased`}
      >
        {children}
        <ToastContainer
         position="top-right"
         autoClose={2500}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"
        />
      </body>
    </html>
  );
}
