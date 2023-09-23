import footerStyles from "./footer.module.css";

export const Footer = ({ clearAllTodos }) => {
  console.log({ footerStyles });

  return (
    <footer className={footerStyles.wr}>
      <div className="d-flex justify-content-center">
        <button
          onClick={clearAllTodos}
          type="submit"
          className="btn btn-primary"
        >
          Clear All
        </button>
      </div>
    </footer>
  );
};
