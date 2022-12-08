import {FC} from "react"
import equilibrium from '../assets/image-equilibrium.jpg'
import avatar from '../assets/image-avatar.png'
import view from '../assets/icon-view.svg'

export const NftCard: FC = () => {
    
    return(
        <section className="nft-card">
          <div className="nft-card__image-container">
            <img
              className="nft-card__hero-image"
              src={equilibrium}
              alt="Equilibrium"
            />
            <img
              className="nft-card__eye-image"
              src={view}
              alt="eye-image"
            />
          </div>
          <div className="nft-card__main">
            <h2 className="nft-card__title">Equilibrium #3429</h2>
            <p className="nft-card__description">
              Our Equilibrium collection promotes balance and calm.
            </p>
    
            <div className="nft-card__stats">
              <div className="nft-card__tracking">0.041 ETH</div>
              <div className="nft-card__end-time">3 days left</div>
            </div>
          </div>
          <div className="nft-card__author">
            <img
              className="nft-card__author-image"
              src={avatar}
              alt="image-avatar"
            />
            <div className="nft-card__author-info">
              Creation of
              <span className="nft-card__author-name"> Jules Wyvern</span>
            </div>
          </div>
        </section>
    )
}