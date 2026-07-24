export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <div className="w-full space-y-4 text-xs text-text">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
        <a href="#">Meta</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Location</a>
        <a href="#">Popular</a>
        <a href="#">Instagram Lite</a>
        <a href="#">Meta AI</a>
        <a href="#">Threads</a>
        <a href="#">Contact Uploading & Non-Users</a>
        <a href="#">Meta Verified</a>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <a href="#">English</a>
        <span>© {year} Famora from Meta</span>
      </div>
    </div>
  );
}
