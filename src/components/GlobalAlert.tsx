import { useSiteContent } from "./SiteContentProvider";

const GlobalAlert = () => {
  const { content } = useSiteContent();
  const alert = content.globalAlert;

  if (!alert || !alert.isActive || !alert.message) {
    return null;
  }

  return (
    <div className="bg-red-600 text-white px-4 py-2 text-center text-sm font-medium z-50 relative">
      {alert.link ? (
        <a href={alert.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
          {alert.message}
        </a>
      ) : (
        <span>{alert.message}</span>
      )}
    </div>
  );
};

export default GlobalAlert;
