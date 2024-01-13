# frozen_string_literal: true

require 'open3'

module Command
  module_function

  # Prints the command conditionally and executes the command.
  def cmd(command, verbose: true)
    puts(command) if verbose
    system(command, exception: true)
  end

  # Executes a command returning it's output
  def output(command)
    stdout, stderr, status = Open3.capture3(command)

    return stdout if status.exitstatus.zero?

    puts "Exit code: #{status.exitstatus}"
    puts 'Stderr:'
    raise stderr
  end
end
