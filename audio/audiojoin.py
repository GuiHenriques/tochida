from pydub import AudioSegment


def join_audio_files(input_files, output_file):
    combined = AudioSegment.empty()

    for file in input_files:
        audio = AudioSegment.from_file(file)
        combined += audio

    combined.export(output_file, format="mp3")


# List of input audio files
input_files = ["audio1.mp3", "audio2.mp3", "audio3.mp3"]

# Output file name
output_file = "combined_audio.mp3"

# Call the function to join audio files
join_audio_files(input_files, output_file)
