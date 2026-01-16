import { Button } from "../ui/button";

const SocialButton = ({ icon, label, onClick, loading }) => {
  return (
    <Button
      type="button"
      disabled={loading}
      onClick={onClick}
      className={`flex-1 h-11 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition
        ${
          loading
            ? "bg-[#1f2937] cursor-not-allowed opacity-70"
            : "bg-[#192233] hover:bg-[#202b40]"
        } text-white`}
    >
      {loading ? (
        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </Button>
  );
};

export default SocialButton;
