import DeletePostButton from "./DeletePostButton";
import UpdatePostButton from "./UpdatePostButton";

const BlogPost = ({ id, title, content, authorName, authSession }) => {
  return (
    <div className="flex flex-col w-full p-4 m-2 bg-slate-950 rounded-lg border-2 border-slate-700">
      <h3 className="text-2xl text-gray-300">{title}</h3>
      <p className="p-2">{content}</p>
      <div className="flex justify-between">
        <p className="text-gray-400 self-end">{authorName}</p>
        {authSession?.user && (
          <div className="flex justify-center items-center gap-1">
            <UpdatePostButton postId={id} />
            <DeletePostButton postId={id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
