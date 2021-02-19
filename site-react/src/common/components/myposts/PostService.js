import axiosConfig from "../../../apis/axiosConfig"; 

const PostData = async (data) => { 
  const response = await axiosConfig.put('/post',data);
  return response.data;
};

export const PatchComment = async (data) => {
  const response = await axiosConfig.patch('/post',data);
  return response.data;
}

export default PostData;