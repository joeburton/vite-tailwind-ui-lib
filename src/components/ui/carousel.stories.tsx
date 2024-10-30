// Code generated via "Slingshot"
import { Meta, StoryObj } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

import { Card, CardContent } from './card';

// Define the type for the story object
type CarouselStory = StoryObj<typeof Carousel>;

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  subcomponents: {
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } as never,
};

export default meta;

// Define the standard carousel story
export const CarouselStandard: CarouselStory = {
  render: () => (
    <div className="ml-10">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
