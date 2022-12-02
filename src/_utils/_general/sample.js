import { Sampler } from "tone";

/** sample
 * Purpose: takes a sound and a number for volume and returns a sample to play notes with. Used mainly in play-related functions
 */

export default function sample({ sound, volume, toDestination = true, baseNote = 'C3' }) {
  const sample = new Sampler({
    urls: { [baseNote]: sound }
  });
  sample.volume.value = volume;

  return toDestination ? sample.toDestination() : sample;
};