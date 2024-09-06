import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import {
  FaTrash,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaPinterest,
  FaSnapchat,
  FaReddit,
  FaTumblr,
  FaYoutube,
  FaSkype,
  FaDiscord,
  FaGithub,
  FaSlack,
  FaTelegram,
  FaWhatsapp,
  FaGooglePlus
} from 'react-icons/fa';
import './SocialPage.scss';

const socialMediaOptions = [
  { name: 'Facebook', icon: FaFacebook, color: '#1877F2' },
  { name: 'Instagram', icon: FaInstagram, color: '#E4405F' },
  { name: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2' },
  { name: 'Twitter', icon: FaTwitter, color: '#1DA1F2' },
  { name: 'TikTok', icon: FaTiktok, color: '#FF0050' },
  { name: 'Pinterest', icon: FaPinterest, color: '#E60023' },
  { name: 'Snapchat', icon: FaSnapchat, color: '#FFFC00' },
  { name: 'Reddit', icon: FaReddit, color: '#FF4500' },
  { name: 'Tumblr', icon: FaTumblr, color: '#35465C' },
  { name: 'YouTube', icon: FaYoutube, color: '#FF0000' },
  { name: 'Skype', icon: FaSkype, color: '#00AFF0' },
  { name: 'Discord', icon: FaDiscord, color: '#7289DA' },
  { name: 'Github', icon: FaGithub, color: '#181717' },
  { name: 'Slack', icon: FaSlack, color: '#4A154B' },
  { name: 'Telegram', icon: FaTelegram, color: '#0088CC' },
  { name: 'WhatsApp', icon: FaWhatsapp, color: '#25D366' },
  { name: 'Google+', icon: FaGooglePlus, color: '#DB4437' }
];

const SocialPage = () => {
  const { data, setData } = useAppContext();
  const [selectedSocial, setSelectedSocial] = useState('');

  const addSocialLink = () => {
    if (selectedSocial && !data.socialLinks.some(social => social.name === selectedSocial)) {
      const selectedOption = socialMediaOptions.find(option => option.name === selectedSocial);
      setData({
        ...data,
        socialLinks: [
          { name: selectedSocial, url: '', icon: selectedOption.icon, color: selectedOption.color },
          ...data.socialLinks,
        ],
      });
      setSelectedSocial('');
    }
  };

  const handleUrlChange = (name, url) => {
    setData({
      ...data,
      socialLinks: data.socialLinks.map(social =>
        social.name === name ? { ...social, url } : social
      ),
    });
  };

  const removeSocialLink = (name) => {
    setData({
      ...data,
      socialLinks: data.socialLinks.filter(social => social.name !== name),
    });
  };

  return (
    <div className="social-page">
      <div className="social-list">
        {data.socialLinks.map((social) => (
          <div key={social.name} className="social-item">
            <social.icon color={social.color} />
            <input
              type="text"
              placeholder={`${social.name} URL`}
              value={social.url}
              onChange={(e) => handleUrlChange(social.name, e.target.value)}
            />
            <FaTrash onClick={() => removeSocialLink(social.name)} className="remove-icon" />
          </div>
        ))}
      </div>
      <div className="social-select">
        <select
          value={selectedSocial}
          onChange={(e) => setSelectedSocial(e.target.value)}
        >
          <option value="">Select Social Media</option>
          {socialMediaOptions.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <span className="add-icon" onClick={addSocialLink}>+</span>
      </div>
    </div>
  );
};

export default SocialPage;
