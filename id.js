(function () {

var module = {
    exports: null
}

module.exports = {
	'id': ['id', 'id'],
	'leftmin': 2,
	'rightmin': 2,
	'patterns': {
		2 : "a1i1o1u1e1",
		3 : "a2ia2uo2i",
		4 : "2b1d2b1j2b1k2b1n2b1s2b1t2c1k2c1n2d1k2d1n2d1p2f1d2f1k2f1n2f1t2g1g2g1k2g1n2h1k2h1l2h1m2h1n2h1w2i1o2j1k2j1n2k1b2k1k2k1m2k1n2k1r2k1s2k1t2l1b2l1f2l1g2l1h2l1k2l1m2l1n2l1s2l1t2l1q2m1b2m1k2m1l2m1m2m1n2m1p2m1r2m1s2n1c2n1d2n1f2n1j2n1k2n1n2n1p2n1s2n1t2n1v2p1k2p1n2p1p2p1r2p1t2r1b2r1c2r1f2r1g2r1h2r1j2r1k2r1l2r1m2r1n2r1p2r1ra2ir2ny_2ng_",
		5 : "2ng1n1lah_2ng1k2ng1hi2o1n2ng1g2ng1s",
		6 : "_te2r3_pe2r32p1an_2z1an_2v1an_2t1an_2n3s2t2r1an__be2r32b1an_2c1an_2d1an_2f1an_2g1an_2h1an_2j1an_2l1an_2m1an_2n1an_2s1an_",
		7 : "_a2ta2u2n1kan_2p1kan_2r1kan_2s1kan_2t1kan_2v1kan_2z1kan__me2ng32n1lah_2b1kan_2c1kan_2d1kan_2f1kan_2g1kan_2h1kan_2j1kan_2ng1an_2l1kan_2m1kan_",
		8 : "2ng1kan_1ba1ga2i",
		9 : "_me3ng4o4_me3ng4e4_me3ng4u4_me3ng4i4_me3ng4a4",
		10 : "_de3ng4an__ta3ng4an__le3ng4an__ja3ng4an__ma3ng4an__pa3ng4an__ri3ng4an_3s4k4ri4p3"
	},
	exceptions: 'be\u2027ra\u2027be, be\u2027ra\u2027hi, be\u2027rak, be\u2027ran\u2027da, be\u2027ran\u2027dal, be\u2027rang, be\u2027ra\u2027ngas\u2027an, be\u2027rang\u2027sang, be\u2027ra\u2027ngus, be\u2027ra\u2027ni, be\u2027ran\u2027tak\u2027an, be\u2027ran\u2027tam, be\u2027ran\u2027tas, be\u2027ra\u2027pa, be\u2027ras, be\u2027ren\u2027deng, be\u2027re\u2027ngut, be\u2027re\u2027rot, be\u2027res, be\u2027re\u2027wok, be\u2027ri, be\u2027ri\u2027ngas, be\u2027ri\u2027sik, be\u2027ri\u2027ta, be\u2027rok, be\u2027ron\u2027dong, be\u2027ron\u2027tak, be\u2027ru\u2027du, be\u2027ruk, be\u2027run\u2027tun, peng\u2027eks\u2027por, peng\u2027im\u2027por, te\u2027ra, te\u2027rang, te\u2027ras, te\u2027ra\u2027si, te\u2027ra\u2027tai, te\u2027ra\u2027wang, te\u2027ra\u2027weh, te\u2027ri\u2027ak, te\u2027ri\u2027gu, te\u2027rik, te\u2027ri\u2027ma, te\u2027ri\u2027pang, te\u2027ro\u2027bos, te\u2027ro\u2027bos\u2027an, te\u2027ro\u2027mol, te\u2027rom\u2027pah, te\u2027rom\u2027pet, te\u2027ro\u2027pong, te\u2027ro\u2027wong\u2027an, te\u2027ru\u2027buk, te\u2027ru\u2027na, te\u2027rus, te\u2027ru\u2027si, pe\u2027rang\u2027kat, pe\u2027rin\u2027tah'
};

var h = new window['Hypher'](module.exports);

if (typeof module.exports.id === 'string') {
    module.exports.id = [module.exports.id];
}

for (var i = 0; i < module.exports.id.length; i += 1) {
  window['Hypher']['languages'][module.exports.id[i]] = h;
}

}());