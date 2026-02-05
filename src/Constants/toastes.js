import { Box, Modal } from "@mui/material";

const Loader = (props) => {
  const style = {
    outline: "none",
  };
  return (
    <Box>
      {props.isLoad ? (
        <Modal open>
          <Box className="loader_loading" sx={style}>
            <figure>
              <img src="/images/loader.gif" alt="loading" />
            </figure>
          </Box>
        </Modal>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Loader;
