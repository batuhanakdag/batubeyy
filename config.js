const config = {
  token: "NTE5NjEyOTAwNjkyOTgzODI5.Xq6HVA.thBf5h-viBcEpgZ1_wvh6kSC3OM", //Botunuzun Tokeni
  sahip: "505378541060227097", //idniz

  dashboard: {
    oauthSecret: "519612900692983829", // Secrec Keyiniz
    callbackURL: "http://gardiyan-eski.glitch.me:8080/callback", //Dönüş Linki
    sessionSecret: "super-secret-session-thing", //Burayı Ellemiyoruz
    domain: "http://gardiyan-eski.glitch.me:8080/", //alanadınız domaininiz
    port: 8080 //glitch kullanıyorsanız ellemeyin vds ise 80 yapın // SSL için cloudflare kullanıcaz 443 yapmayın portu 80 kalsın (vds için)
  }
};

module.exports = config;
