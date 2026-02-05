import { Box, InputAdornment, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { Dispatch, SetStateAction } from "react";
import ClearIcon from "@mui/icons-material/Clear";

// type SearchProps = {
//   value?: string;
//   onChange?: any;
//   onCross?: () => void;
//   searchTerm: string;
//   setDebouncedSearchTerm?: Dispatch<SetStateAction<string>>;
//   placeholder: string
// };

const SearchBar = ({
  value,
  onChange,
  onCross,
  placeholder
}) => {
//   useEffect(() => {
//     const delay = 1000; // Debounce delay in milliseconds
//     const timerId = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, delay);

//     return () => {
//       clearTimeout(timerId); // Clear the timeout on cleanup
//     };
//   }, [searchTerm]);

  return (
    <Box className="form search_bar">
      <TextField
        value={value}
        onChange={onChange}
        hiddenLabel
        placeholder={placeholder}
        className="txt_inpt"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className="search_icon">
              <img src="/static/images/searchbar_icon.svg" alt="Icon" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" className="cross_btn">
              {value ? (
                <ClearIcon
                  style={{ background: "white", color: "red" }}
                  onClick={onCross}
                />
              ) : null}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
