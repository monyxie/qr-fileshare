import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import QRCode from 'qrcode.react';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogActions from 'material-ui/Dialog/DialogActions';

const style = {
  position: "fixed",
  bottom: "16px",
  right: "96px"
};

class ShowQrCodeButton extends Component {
  constructor() {
    super();
    this.state = {
        open: false
    }
  }

  handleClick = () => {
      this.setState({
          open: true
      })
  };

  handleClose = () => {
      this.setState({
          open: false
      })
  };

  render() {
    return (
        <div>
          <Button variant="fab" color="default" aria-label="qr" style={style} onClick={this.handleClick}>
              <Icon>
                  <svg aria-hidden="true"
                       role="img"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512">
                      <g id="corner">
                          <path d="M16 32h192v192h-192v-32h160v-128h-128v160h-32"/>
                          <path d="M80 96h64v64h-64"/>
                      </g>

                      <use href="#corner" x="232"/>
                      <use href="#corner" y="224"/>
                      <path d="M244 256v96h96v-96"/>
                      <path d="M340 352v96h96v-96"/>
                  </svg>
              </Icon>
          </Button>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"QR Code"}</DialogTitle>
                <DialogContent>
                    <QRCode value={window.location.href}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Dismiss
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
  }
}

export default ShowQrCodeButton;
