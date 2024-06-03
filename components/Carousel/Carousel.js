import React from "react";
import {
  DotButton,
  useDotButton,
} from "./components/CarouselDotButtons/CarouseDotButtons";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./components/CarouselArrowButtons/CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";
import { NewsCard } from "../NewsCard/NewsCard";
import { MoreNews } from "../NewsCard/MoreNews";

const Carousel = (props) => {
  const { slides, options, data } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slideIndex, mapIndex) => (
            <div className={styles.embla__slide} key={mapIndex}>
              <div className={styles.embla__slide__inner}>
                <NewsCard key={slideIndex} index={mapIndex} data={data} />
              </div>
            </div>
          ))}
          <div className={styles.embla__slide}>
            <div className={styles.embla__slide__inner}>
              <MoreNews />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${
                index === selectedIndex
                  ? styles.embla__dot
                  : styles.embla__dot__selected + " " + styles.embla__dot
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
