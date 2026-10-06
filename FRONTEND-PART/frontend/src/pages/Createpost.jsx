import React from "react";

const Createpost = () => {
  return (
    <section className="create_post-section">
      <h1>Create post</h1>
      <form>
        <input type="file" name="image" accept="image/*" />
        <input
          type="text"
          name="caption"
          required
          placeholder="Enter Caption"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Createpost;
