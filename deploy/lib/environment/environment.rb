# frozen_string_literal: true

module Environment
  module_function

  def all
    [DEVELOP_ENVIRONMENT] + TAGGED_ENVIRONMENTS
  end

  def dev?
    current == DEVELOP_ENVIRONMENT
  end

  def tagged?
    TAGGED_ENVIRONMENTS.include? current
  end

  def current
    ENV.fetch('ENVIRONMENT')
  end

  def ci?
    ENV.fetch('CI', '') == 'true'
  end
end
