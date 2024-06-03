import React from 'react';

const NewPost = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="bg-blue-800 shadow-lg rounded-lg p-8 max-w-lg mx-auto text-white">
        <h1 className="text-2xl font-bold mb-6">Create A New Blog Post</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-base rounded bg-blue-900 shadow-lg p-2">Title</label>
          </div>

          <div className="mb-4">
            <label htmlFor="thumbnail" className="block text-base rounded bg-blue-900 shadow-lg p-2">Post Thumbnail
			 </label>
          </div>

          <div className="mb-4b bg-blue-900">
            <textarea
            //   id="content"
            //   name="content"
              className="w-full bg-blue-900 mt-1 p-2 text-white rounded"
              placeholder="Write the content"
              rows="10"
            >
			</textarea>
          </div>
<div className='my-5 text-center flex gap-5'>
<i class="bi bi-toggle-on text-blue-800 text-4xl"></i>
	<p className='my-2'>Publish Now</p>
	<button type='button' className='bg-blue-900 rounded w-28 '>Schedule post</button>

	</div>
<div className='flex justify-between'>
	<p className='p-3 bg-blue-900 rounded '>11 jan,2024 at 4:00 pm</p>
	<button type='button' className='bg-blue-900 rounded w-28 h-9'>Preview post</button>
	<button
              type="submit"
              className="bg-yellow-500  text-white px-2 h-8 rounded focus:outline-none focus:shadow-outline">Publish</button>
</div>

        </form>
      </div>
    </div>
  );
}

export default NewPost;
