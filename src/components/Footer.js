const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 text-sm flex flex-col md:flex-row items-center justify-center gap-2 py-4 text-red-main bg-white">
      <p>
        ©{" "}<a href="https://github.com/annalemonbcn" className="underline underline-offset-2">annalemonbcn</a>
      </p>
      <span>-</span>
      <p>Web development from Barcelona</p>
    </footer>
  );
};

export default Footer;
