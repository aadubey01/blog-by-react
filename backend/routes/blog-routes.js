import express from 'express';
import { getAllBlogs,addBlog,getById, updateBlog, deleteBlog, getUserId } from "../controller/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getUserId)

export default blogRouter;