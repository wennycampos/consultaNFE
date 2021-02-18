const consultaNFE = require("../dist/index");
const QRCodeURL =
	"http://www4.fazenda.rj.gov.br/consultaNFCe/QRCode?p=33200710834199000107651260002200661002204684|2|1|1|f200be89104d9b1e8aebb08c3b379bc7d3005ce9";

var QueryNFE = new consultaNFE(QRCodeURL).get();

QueryNFE.then((NFEDados) => {
	console.log(NFEDados);
});
