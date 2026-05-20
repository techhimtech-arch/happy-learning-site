import { useSiteContent } from "./SiteContentProvider";

const GlobalAlert = () => {
  const { content } = useSiteContent();
  const alert = content.globalAlert;

  if (!alert || !alert.isActive || !alert.message) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-red-600 text-white px-4 py-3 text-center text-sm font-medium z-50">
      {alert.link ? (
        <a href={alert.link} className="hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
          {alert.message}
        </a>
      ) : (
        <span>{alert.message}</span>
      )}
    </div>
  );
};

export default GlobalAlert;
