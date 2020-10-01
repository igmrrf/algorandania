import React from "react";
import { Button } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";

class CopyExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { copySuccess: "" };
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand("copy");
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };

  render() {
    return (
      <div>
        {document.queryCommandSupported("copy") && (
          <div onClick={this.copyToClipboard}>
            <Tooltip title={"Copy To Clipboard"}>
              <Button
                variant={"contained"}
                color={"primary"}
                style={{ margin: "auto" }}
              >
                Copy
              </Button>
            </Tooltip>
            {this.state.copySuccess}
          </div>
        )}
        <form>
          <textarea
            ref={(textarea) => (this.textArea = textarea)}
            value="34yrzburKiqu5hB3SMJ1TYdjRE99cHUcv3"
            style={{ display: "none" }}
          />
        </form>
      </div>
    );
  }
}

export default CopyExample;
