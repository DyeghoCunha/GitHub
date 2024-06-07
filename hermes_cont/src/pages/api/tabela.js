{/** 
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet('1MCllW0gXUrLZt0--DRiOw3TBEwu-BVWuHwN5dy3GlmI');

  // Create a JWT client using your service account credentials
  const credentials = {
    client_email: 'hermescont@hermes-422017.iam.gserviceaccount.com',
    private_key:"MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDwhe9pP3dFpJTz\n7Uz1x35aeVXGPAd+Bu3e41CNRrQgeoZ7JR0ODJvwP2PWW5Q4D224Sf6Tt7+GD/Ek\ncUADgEDw/Lq1g2mIXasyApNbXF9N9noFwxy26ezIvVa9sWAy+7Fmy8tXxKdkCyRY\na90uDRea7bViy2KdISdFN9LBtWbHRw/ShrD9KrVv74bM8EZc9QIuQd7joBC/3UxI\nqYOWe33lPIM1nF65Ze93yd0iPv5EULBvIzobhlVT6KknYnbsd1sJuP6N69cAjqyd\nsrDyYCKbhduO1XeeBCG0ZJibxCWo/D7KsZ7IX44105p/yNVBP0waDGQU5PIZsY+V\n7GPIigyZAgMBAAECggEABgMvGCguPNcvowZaT2WIfs38Kyuqe0fEj/cKNzHehFZT\nwMXNe2Gszz1ia0QYSSt3kG0HGF22Q61n14OeOEgvN2b16t4pV++RfTtLwDOnrTz9\nUWIOeHMSCHWVMsI5l6Sri1iKUXwYvBs8MhqmKYXJwoVxLJJNeYSP5P7PfaihdFdB\nwK43mGv02SEQTENiZs0Plm520Qz2f3nZeWcumkvZEsBojjSxavGRv7aEQACes1R4\nMwtl71NRPD6nZiDZ/N91XeVGoye8r9eZW21CMRd4/avPPKpgHPBtQ9bxQNXCSeRF\n07uHLpn5Tt/5VetdtEC9J3xVQFIvaUxO2zSO921mgQKBgQD+6wuK77LgHhsS4nkO\nCA12THOJBc6b/jcTPRB5PiPRViTrUC5A2XSWAt55GicjwBhujRjotB7Ys0xmU/Xx\nwCRvKQ7LuJ0+EeDb8WRna8vL7LrGMfMv6P8zYBPNLembWHbO1iB/2+U7SUA59YtY\ndZRIqm4OYRS4rwKduuMyzvG+2QKBgQDxi0Axoi8+0uEBILMzJV3vHG+juQ1qN9kY\nOrnk4lThtls/Msf9CbTYVpoPm1qB9iYgSLDSIXnCn8SsBpmzlm+O9lL/eNt0jKgU\nkN0EIPFhj0xUEVoDXtVRC/jNps9jG5O9iixr+xpuS0RQRB/HKKd5EWSi33XKAL2w\nBvWhpM2jwQKBgQCfmfm4GysbNr4srK6uIkyLbIJJn+EjuZ4x5WGTB1zVi+HBkonj\nAEMGSPWRTNaEg5jIXn7h8yP8+QU0bAzoNyyYjFQ/KG8KlZb7Hb+HIO6P1r95p3xi\n2rYtLFI5fC1unYyFI3tlkf+Lhuk3YIzF7ZfRhyMwzYdzud8hcgkdnoOswQKBgQCz\nRol0zU2HsXjzH1QiB//6Mv7hY74DMkRdaWkD6sDZbkG3XHd25bdmQpDCOKoqf4m4\nuHsU22fF/lM44wU9d9CBKW5c01T+4k72RLbmE5VUtckPNHm8uqxVJS+bY83VX2h+\na4mg85SgfBjOAmIbrZ7viutIv9ZrAbXIasHxIaLHgQKBgQDu5r930ROFFVmR3Lpz\nau2tZBbgGMORTPJuNuuVlv2JlE0qu4rFIhPwl+nmMGsOjI8glXrmLJpTUvxzxZqU\nje9i56c72/GWlN5n6/wf0qjLZULdOg/LIRHFgb0xy2gLgSLKxQvfNjYjXSR68Awy\nVFcvGyLxbB/3HBVN/dMujWA0Ag=="
  }

  await doc.loadInfo(); 

  const sheet = doc.sheetsByIndex[0]; 
  const rows = await sheet.getRows(); 

  let tabelaEnquadramento = rows.map(row => ({
    cnae: row.CNAE,
    descricao: row.Descrição,
    anexo: row.Anexo,
    fatorR: row['Fator R'],
    aliquota: row.Alíquota,
    hermes: row.Hermès
  }));
//console.log("click")
  //console.log(tabelaEnquadramento);
}

accessSpreadsheet();
*/}