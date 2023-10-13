import footerStyles from './footer.module.css';

export function Footer({ clearAllTodos }) {
  console.log({ footerStyles });

  return (
    <footer className="d-flex justify-content-center">
      <button onClick={clearAllTodos} type="submit" className="btn btn-dark">
        Clear All
      </button>
    </footer>
  );
}
